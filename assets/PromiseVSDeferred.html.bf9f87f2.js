import{_ as n,o as a,a as t,F as s,b as e}from"./app.ca6aeb4d.js";const i={},l=e("p",null,"// \u63D0\u4EA4\u8868\u5355 $(document).on('click', '#btn_add_pending_package', function() { $(this).addClass('btn_disabled').prop('disabled', true); if (!confirm('\u786E\u5B9A\u8981\u63D0\u4EA4\u672A\u9884\u62A5\u5305\u88F9\u4FE1\u606F\uFF1F')) { $(this).removeClass('btn_disabled').prop('disabled', false); return; }",-1),r=e("pre",null,[e("code",null,`const warehouse_id = $('#warehouse_id').val();
const package_weight = $.trim($('#package_weight').val());
const facade_status = $('input[name=facade_status]:checked').val();
const comment = $.trim($('#comment').val());
const shelf = $('#shelf').val()
// $.ajax \u8FD4\u56DE\u7684\u5C31\u662F deferred\uFF0Cdeferred\u6709
// done \u6210\u529F\u8C03\u7528, fail \u5931\u8D25\u8C03\u7528\uFF0Ccatch \u4E5F\u662F\u5931\u8D25\u7684\u8C03\u7528\uFF0Cthen \u5C31\u662F\u76F8\u5BF9\u662F\u7B80\u5199 then(() => {}, () => {})\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662Fdone, \u7B2C\u4E8C\u4E2A\u5C31\u662Ffail
    // deferred.fail( fn, fn ) fail \u53EF\u4EE5\u63A5\u53D7\u591A\u4E2A\u53C2\u6570
    // deferred.catch( fn ) is an alias to deferred.then( null, fn ). Read its page for more information.
    // catch\u548Cfail\u7565\u6709\u4E0D\u540C\uFF0Ccatch\u5C06\u8FD4\u56DE\u65B0\u7684\u627F\u8BFA\uFF0C\u800Cfail\u5C06\u8FD4\u56DE\u539F\u59CB\u627F\u8BFA\u3002
    // // This will only output "fail"
    // $.Deferred()
    //     .reject(new Error("something went wrong"))
    //     .fail(function() {
    //     console.log("fail");
    //     })
    //     .then(function() {
    //     console.log("then after fail");
    //     })
    // // This will output "catch" and "then after catch"
    // $.Deferred()
    //     .reject(new Error("something went wrong"))
    //     .catch(function() {
    //     console.log("fail");
    //     })
    //     .then(function() {
    //     console.log("then after catch");
    //     })
// resolve \u624B\u52A8\u6539\u53D8deferred\u5BF9\u8C61\u7684\u6267\u884C\u72B6\u6001\u5DF2\u5B8C\u6210 \u4ECE\u800C\u89E6\u53D1 done, reject\u6539\u53D8deferred\u5BF9\u8C61\u7684\u6267\u884C\u72B6\u6001 \u5DF2\u5931\u8D25 \u4ECE\u800C\u89E6\u53D1 fail
$.ajax({
    type: 'post',
    url: base_url + 'pending_package/add_v1',
    data: { warehouse_id, package_weight, facade_status, comment, shelf },
    beforeSend: function() {
        $("#sub_cat").empty();
        $("#sub_cat").append('<option value="0">-\u8BF7\u9009\u62E9-</option>');
    },
}).then((result) => {
    if (result.status == false) {
        alert(result.message)
        // throw 'add_v1:' + result.message
        return;
    }
    const pending_package_id = result.data.pending_package_id
    $('#pending_package_id').val(pending_package_id)
    const publisher = attachments.map((item) => {
        return new Promise((resolve, reject) => {
            file_upload.publish(item, item, \`input_packages/\${pending_package_id}\`, 0).then((json) => {
                let {code, message, data} = json
                if (code == 200) {
                    let path = file_upload.splitImagePath(data.new_file_path)
                    resolve(file_upload.splitImagePath(data.new_file_path));
                } else {
                    // \u6E05\u7A7A\u4E0A\u4F20\u56FE\u7247
                    attachments = [];
                    // \u6E05\u7A7A\u4E0A\u4F20\u56FE\u7247\u6548\u679C
                    $('.text_img_item').remove()
                    alert(message)
                    reject('publish:' + message)
                }
            }, (err) => {
                // \u6E05\u7A7A\u4E0A\u4F20\u56FE\u7247
                attachments = [];
                // \u6E05\u7A7A\u4E0A\u4F20\u56FE\u7247\u6548\u679C
                $('.text_img_item').remove()
                reject('publish_catch:'+ err)
            });
        })
    })
    // \u8FD4\u56DEpushlish\u540E\u7684\u8DEF\u5F84\u548Cpending_package_id
    return Promise.all(publisher).then(new_file_paths => { return {new_file_paths, pending_package_id}})
}).then((result) => {
    return $.ajax({
        type: 'post',
        url: base_url + 'pending_package/add_image_v1',
        data: { pending_package_id:result.pending_package_id, images: result.new_file_paths },
    });
}).then((result) => {
    if (result.status) {
        window.location = base_url + 'pending_package/add?success=1&pp_id=' + $('#pending_package_id').val() + '&shelf=' + $('#shelf').val()
    } else {
        window.location = base_url + 'pending_package/add?error=1'
    }
}).catch((error) => {
    $(this).removeClass('btn_disabled').prop('disabled', false);
    // \u5173\u95ED\u5F39\u7A97
    close();
    // add_v1 500 \u62A5\u9519\u53EF\u4EE5\u6355\u83B7
    // add_v1 then \u4E2Dthrow\u53EF\u4EE5\u6355\u83B7\uFF08\u4E1A\u52A1\u62A5\u9519\uFF09
    // add_v1 then \u4E2D\u4EE3\u7801\u9519\u8BEF\u53EF\u4EE5\u6355\u83B7\u6BD4\u5982 result.data.pending_package_id \u672A\u5B9A\u4E49
    // add_v1 then \u4E2Dfile_upload.publish \u7684 500\u9519\u8BEF\u53EF\u4EE5\u6355\u83B7 publish_catch:
    // add_v1 then \u4E2Dfile_upload.publish \u7684 code != 200\uFF08\u4E1A\u52A1\u62A5\u9519\uFF09 \u53EF\u4EE5\u6355\u83B7 publish:

    console.log('catch', error)
})
`)],-1),d=e("p",null,"});",-1),o=e("p",null,"$(document).on('click', '#btn_add_pending_package', function() { $(this).addClass('btn_disabled').prop('disabled', true); if (!confirm('\u786E\u5B9A\u8981\u63D0\u4EA4\u672A\u9884\u62A5\u5305\u88F9\u4FE1\u606F\uFF1F')) { $(this).removeClass('btn_disabled').prop('disabled', false); return; }",-1),c=e("pre",null,[e("code",null,`const warehouse_id = $('#wh').val();
const package_weight = $.trim($('#package_weight').val());
const facade_status = $('input[name=facade_status]:checked').val();
const comment = $.trim($('#comment').val());
const shelf = $('#shelf').val()

$.ajax({
    type: 'post',
    url: base_url + 'pending_package/add_v1',
    data: { warehouse_id, package_weight, facade_status, comment, shelf },
    beforeSend: function() {
        $("#sub_cat").empty();
        $("#sub_cat").append('<option value="0">-\u8BF7\u9009\u62E9-</option>');
    },
}).then((result) => {
    if (result.status == false) {
        alert(result.message)
        return Promise.reject('add_v1:' + result.message)
    }
    const pending_package_id = result.data.pending_package_id
    $('#pending_package_id').val(pending_package_id)

    if (attachments.length <= 0) {
        return Promise.resolve([])
    }

    // \u5F53\u90FD\u5904\u7406\u8BE5promise\u7684\u9519\u8BEF\u65F6\u7684\u60C5\u51B5
    return file_upload.batchPublish(attachments, '', \`input_packages/\${pending_package_id}\`, 0).catch((error) => {
        // \u6E05\u7A7A\u4E0A\u4F20\u56FE\u7247
        attachments = [];
        // \u6E05\u7A7A\u4E0A\u4F20\u56FE\u7247\u6548\u679C
        $('.text_img_item').remove()
        alert(error)
        // \u5FC5\u987B\u8981return Promise.reject\uFF0C\u5426\u5219file_upload.batchPublish\u5C06\u662Fresolve
        return Promise.reject('batchPublish:' + error)
    })
}).then((new_file_paths) => {
    if (new_file_paths.length > 0) {
        return $.ajax({
            type: 'post',
            url: base_url + 'pending_package/add_image_v1',
            data: { pending_package_id:$('#pending_package_id').val(), images: new_file_paths },
        });
    } else {
        return Promise.resolve({'status' : true})
    }
}).then((result) => {
    if (result.status) {
        window.location = base_url + 'pending_package/add?success=1&pp_id=' + $('#pending_package_id').val() + '&shelf=' + $('#shelf').val()
    } else {
        window.location = base_url + 'pending_package/add?error=1'
    }
}).catch((error) => {
    $(this).removeClass('btn_disabled').prop('disabled', false);
    // \u5173\u95ED\u5F39\u7A97
    close();
    console.log('final catch', error)
})
`)],-1),_=e("p",null,"});",-1),p=e("p",null,"https://www.jianshu.com/p/0e1c9bec17ad",-1);function u(h,g){return a(),t(s,null,[l,r,d,o,c,_,p],64)}var m=n(i,[["render",u]]);export{m as default};
