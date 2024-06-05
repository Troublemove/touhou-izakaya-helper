<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	uni-page-body, html, body, page {
		background-color: #8D6549;
	}
	
	body {
	    background-color: #8D6549;
	}
    .tag-filter {
        height: 30px;
        padding: 5px;
        display: flex;
        
        .tag-scroll {
            width: calc(100% - 60px);
            white-space: nowrap;
        }
    }
    :deep(.uni-scroll-view::-webkit-scrollbar) {
        display: none;
    }
    
	.touhou-tag {
		display: flex;
        align-items: center;
		margin: 3px 2px;
		padding: 2px 6px;
		color: #830000;
		background-color: inherit;
		background-image: url('/static/img/common/tag.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		// box-shadow: inset 0px 0px 10px 1px #E6B4A6;
		position: relative;
	}
    /* .touhou-tag-select::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        border: 12px solid rgba(131, 0, 0, 0.1);
        border-top-color: transparent;
        border-left-color: transparent;
    } */
	.touhou-tag-select::after {
		content: '';
		width: 5px;
		height: 15px;
		position: absolute;
		right: 5px;
		bottom: 0px;
		border: 3px solid #E40D0D;
		border-top-color: transparent;
		border-left-color: transparent;
		transform: rotate(45deg);
	}
    /* .touhou-tag-select::after {
        content: '\2714';
        color: #830000;
    } */
	
	.touhou-notag-left {
		display: flex;
        align-items: center;
		margin: 3px 2px;
		padding: 2px 8px;
		color: #E40D0D;
		background-color: inherit;
		background-image: url('/static/img/common/notag-no.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		// box-shadow: inset 0px 0px 10px 1px #5D453A;
		position: relative;
	}
	.touhou-notag-left-select::after {
		content: '';
		width: 5px;
		height: 15px;
		position: absolute;
		right: 5px;
		bottom: 0px;
		border: 3px solid #E40D0D;
		border-top-color: transparent;
		border-left-color: transparent;
		transform: rotate(45deg);
	}
    .touhou-tag-left-noselect::before, .touhou-tag-left-noselect::after {
        content: '';
        width: 0px;
        height: 15px;
        position: absolute;
        right: 10px;
        bottom: 3px;
        border: 1px solid #000000;
		background-color: #e40d0d;
    }
    .touhou-tag-left-noselect::before {
        transform: rotate(45deg);
    }
    .touhou-tag-left-noselect::after {
        transform: rotate(-45deg);
    }
	
    .drink-tag {
        display: flex;
        align-items: center;
        margin: 2px 2px;
        padding: 2px 8px;
        color: #A45C22;
        background-color: inherit;
        background-image: url('/static/img/common/drinks.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        // box-shadow: inset 0px 0px 10px 1px #E6B4A6;
        position: relative;
    }
    .drink-tag-select::after {
        content: '';
        width: 5px;
        height: 15px;
        position: absolute;
        right: 5px;
        bottom: 0px;
        border: 3px solid #E40D0D;
        border-top-color: transparent;
        border-left-color: transparent;
        transform: rotate(45deg);
    }
    
    .top-back {
        width: 40px;
        height: 40px;
        position: fixed;
        right: 15px;
        bottom: 80px;
        border-radius: 30px;
        border: 1px solid #fbefcb;
        background-color: #8D6549;
        
        .arrow {
            position: absolute;
            left: 11px;
            top: -1px;
            width: 0;
            height: 0;
            border: 9px solid transparent;
            border-bottom-color: #fbefcb;
        }
        .stick {
            position: absolute;
            left: 16px;
            top: 15px;
            width: 8px;
            height: 14px;
            display: block;
            background-color: #fbefcb;
            -webkit-border-radius: 1px;
            -moz-border-radius: 1px;
            border-radius: 1px;
        }
    }
</style>
