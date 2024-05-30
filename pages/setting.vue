<template>
    <view class="setting">
        <uv-notice-bar :text="notice" color="#830000"></uv-notice-bar>
        <uv-toast ref="toast"></uv-toast>
        <button @click="clearCacheModal.open()">重置缓存</button>
        <button @click="chooseFile()">读取配置文件</button>
        <!-- <button @click="test()">loading</button> -->
    </view>
    <uv-loading-page :loading="loading" loading-text="读取中..." font-size="20px" loading-mode="semicircle" bgColor="#8D6549"></uv-loading-page>
    <uv-modal ref="clearCacheModal" content='该操作会将所有数据重置!' :showCancelButton='true' @confirm="clearCache()"></uv-modal>
    <tab-bar :selected="3"></tab-bar>
</template>

<script setup>
    import {
		reactive,
        ref
    } from 'vue';
    import tabBar from '@/components/tab-bar/tabBar.vue'
    import {
        initCache
    } from '@/static/js/common.js'
	
    const notice = ref('该软件永久免费使用！')
	const fileData = reactive({
		'npc': 'npcData',
		'npcRecommend': 'npcData',
		'location': 'locationData',
		'drink': 'drinksData',
		'cook': 'cookData',
		'matrial': 'materialData',
		'drinkTag': 'drinkTagData',
		'cookTag': 'cookTagData',
	})

    const loading = ref(false)
    const toast = ref('')
    const showToast = (params) => {
        toast.value.show({
            ...params,
            complete() {
                params.url && uni.navigateTo({
                    url: params.url
                })
            }
        })
    }

    const clearCacheModal = ref('')
    // 清理缓存，并重新加载
    const clearCache = () => {
		uni.clearStorageSync()
        initCache()
        showToast({
            type: 'success',
            message: "缓存重置成功!",
            duration: 1000
        })
    }
    
    const test = (params) => {
        loading.value = true
        setTimeout(() => {
            loading.value = false
        }, 1000)
    }

    const readFile = (fileName) => {
        loading.value = true
        const File = plus.android.importClass('java.io.File');
        const InputStreamReader = plus.android.importClass('java.io.InputStreamReader');
        const BufferedReader = plus.android.importClass('java.io.BufferedReader');
        const FileInputStream = plus.android.importClass('java.io.FileInputStream');
        let file = new File(fileName);
        let inputStreamReader = null;
        let bufferedReader = null;
        let list = '';

        try {
			let index = fileName.lastIndexOf('/')
			let fileDataName = fileName.substr(index + 1).split('.')[0].split('_')[0]
			console.log('--', fileData[fileDataName]);
			
            if (!file.exists()) {
                return false;
            }
            inputStreamReader = new InputStreamReader(new FileInputStream(file), 'utf-8');
            bufferedReader = new BufferedReader(inputStreamReader);
            let line = '';
            while (null != (line = bufferedReader.readLine())) {
                list += line;
            }
            console.log('fileContent', list);
            let json = JSON.parse(list)
			if ('npcRecommend' !== fileDataName) {
				uni.setStorageSync(fileData[fileDataName], json)
			} else {
				// 处理文件内容
                let jsonMap = ref([])
                json.forEach(item => {
                    jsonMap.value[item.chinese] = item
                })
                let npcDatas = uni.getStorageSync(fileData[fileDataName])
                npcDatas.forEach(item => {
                    if (jsonMap.value.hasOwnProperty(item.chinese)) {
                        for (keys in jsonMap.value[item.chinese]) {
                            item[keys] = jsonMap.value[item.chinese][keys]
                        }
                    }
                })
                uni.setStorageSync(fileData[fileDataName], npcDatas)
			}
            showToast({
                type: 'success',
                message: "文件导入成功!",
                duration: 1000
            })
        } catch (e) {
            console.log(e);
            showToast({
                type: 'error',
                icon: false,
                message: "文件读取失败! " + e,
                duration: 2500
            })
            if (null != bufferedReader) {
                bufferedReader.close();
            }
            if (null != inputStreamReader) {
                inputStreamReader.close();
            }
        } finally {
            loading.value = false
            bufferedReader.close();
            inputStreamReader.close();
        }
    }

    const chooseFile = () => {
        var CODE_REQUEST = 1000;
        var main = plus.android.runtimeMainActivity();
        if (plus.os.name == 'Android') {
            var Intent = plus.android.importClass('android.content.Intent');
            var intent = new Intent(Intent.ACTION_GET_CONTENT);
            intent.addCategory(Intent.CATEGORY_OPENABLE);
            intent.setType("*/*");
            main.onActivityResult = function(requestCode, resultCode, data) {
                if (requestCode == CODE_REQUEST) {
                    var uri = data.getData();
                    plus.android.importClass(uri);
                    var Build = plus.android.importClass('android.os.Build');
                    var over4less10 = Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT;
                    var over10 = Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q;
                    var DocumentsContract = plus.android.importClass('android.provider.DocumentsContract');
                    console.log("jjjjjjjjjjjjjjjjjj", uri.getScheme());

                    try {
                        // DocumentProvider
                        if (over4less10 && !over10 && DocumentsContract.isDocumentUri(main, uri)) {
                            console.log('111', uri.getAuthority());
                            // ExternalStorageProvider
                            if ("com.android.externalstorage.documents" == uri.getAuthority()) {
                                var docId = DocumentsContract.getDocumentId(uri);
                                var split = docId.split(":");
                                var type = split[0];
                                console.log('333', type);

                                if ("primary" == type) {
                                    var Environment = plus.android.importClass('android.os.Environment');
                                    console.log('333444', Environment.getExternalStorageDirectory() + "/" + split[1]);
									readFile(Environment.getExternalStorageDirectory() + "/" + split[1])
                                } else {
                                    var System = plus.android.importClass('java.lang.System');
                                    var sdPath = System.getenv("SECONDARY_STORAGE");
                                    console.log('333555', sdPath + "/" + split[1]);
									readFile(sdPath + "/" + split[1])
                                }
                            }
                            // DownloadsProvider
                            else if ("com.android.providers.downloads.documents" == uri.getAuthority()) {
                                var id = DocumentsContract.getDocumentId(uri);
                                var ContentUris = plus.android.importClass('android.content.ContentUris');
                                var Uri = plus.android.importClass('android.net.Uri');
                                var contentUri = ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), id);
                                console.log('333666', getDataColumn(main, contentUri, null, null));
								readFile(getDataColumn(main, contentUri, null, null))
                            }
                            // MediaProvider
                            else if ("com.android.providers.media.documents" == uri.getAuthority()) {
                                var docId = DocumentsContract.getDocumentId(uri);
                                var split = docId.split(":");
                                var type = split[0];

                                var MediaStore = plus.android.importClass('android.provider.MediaStore');
                                if ("image" == type) {
                                    contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                                } else if ("video" == type) {
                                    contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                                } else if ("audio" == type) {
                                    contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                                }

                                var selection = "_id=?";
                                var selectionArgs = new Array();
                                selectionArgs[0] = split[1];
                                console.log('111', MediaStore);

                                console.log('333777', getDataColumn(main, contentUri, selection, selectionArgs));
								readFile(getDataColumn(main, contentUri, selection, selectionArgs))
                            }
                        } else if (over10) {
                            // 大于等于10
							// 好像都使用了这个方法，复制到app文件下cache文件下读取内容
                            plus.android.importClass(main.getContentResolver());
                            let contentResolver = main.getContentResolver();
                            if (contentResolver.SCHEME_FILE === uri.getScheme()) {
                                console.log('4444444444', uri.getPath());
								readFile(uri.getPath())
                            } else {
                                let cursor = contentResolver.query(uri, null, null, null, null)
                                plus.android.importClass(cursor);
                                if (cursor.moveToFirst()) {
                                    var openableColumns = plus.android.importClass('android.provider.OpenableColumns')
                                    var displayName = cursor.getString(cursor.getColumnIndex(openableColumns.DISPLAY_NAME))
                                    const File = plus.android.importClass('java.io.File')
                                    const FileUtils = plus.android.importClass('android.os.FileUtils')
                                    const FileOutputStream = plus.android.importClass('java.io.FileOutputStream')
                                    const InputStream = plus.android.importClass('java.io.InputStream')
                                    let file = null
                                    try {
                                        let is = contentResolver.openInputStream(uri)
                                        let file1 = new File(main.getExternalCacheDir().getAbsolutePath())
                                        if (!file1.exists())
                                        {
                                            file1.mkdir()
                                        }
                                        let cache = new File(file1.getPath(), displayName)
                                        let fos = new FileOutputStream(cache)
                                        FileUtils.copy(is, fos)
                                        file = cache
                                        fos.close()
                                        is.close()
                                        console.log('5555555555', file.getAbsolutePath())
										readFile(file.getAbsolutePath())
                                    } catch (e) {
                                        console.log(e);
                                    }
                                }
                            }
                        } else if ("content" === uri.getScheme()) {
                            console.log('333888', getDataColumn(main, uri, null, null));
							readFile(getDataColumn(main, uri, null, null))
                        } else if ("file" === uri.getScheme()) {
                            console.log('333999', uri.getPath());
							readFile(uri.getPath())
                        }
                    } catch (e) {
                        console.log(e);
                        showToast({
                            type: 'error',
                            icon: false,
                            message: "文件路径获取失败! " + e,
                            duration: 2500
                        })
                    }
                }
            }
            main.startActivityForResult(intent, CODE_REQUEST);
        }
    }

    const getDataColumn = (main, uri, selection, selectionArgs) => {
        let res = ''
        try {
            plus.android.importClass(main.getContentResolver());
            let cursor = main.getContentResolver().query(uri, ['_data'], selection, selectionArgs, null);
            plus.android.importClass(cursor);
            if (cursor != null && cursor.moveToFirst()) {
                var column_index = cursor.getColumnIndexOrThrow('_data');
                var result = cursor.getString(column_index)
                res = result;
                cursor.close();
            }
        } catch (e) {
            console.log(e);
            showToast({
                type: 'error',
                icon: false,
                message: "文件路径获取失败! " + e,
                duration: 2500
            })
        }

        return res;
    }
</script>

<style lang="scss" scoped>
	.setting {
		height: calc(100dvh - 120px);
	    background-color: #8D6549;
		padding: 10px;
		
		button {
			margin: 10px;
            background-color: #fbefcb;
		}
	}
</style>