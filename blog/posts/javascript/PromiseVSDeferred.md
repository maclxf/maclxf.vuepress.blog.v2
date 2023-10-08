// 提交表单
$(document).on('click', '#btn_add_pending_package', function() {
    $(this).addClass('btn_disabled').prop('disabled', true);
    if (!confirm('确定要提交未预报包裹信息？')) {
        $(this).removeClass('btn_disabled').prop('disabled', false);
        return;
    }

    const warehouse_id = $('#warehouse_id').val();
    const package_weight = $.trim($('#package_weight').val());
    const facade_status = $('input[name=facade_status]:checked').val();
    const comment = $.trim($('#comment').val());
    const shelf = $('#shelf').val()
    // $.ajax 返回的就是 deferred，deferred有
    // done 成功调用, fail 失败调用，catch 也是失败的调用，then 就是相对是简写 then(() => {}, () => {})第一个参数就是done, 第二个就是fail
        // deferred.fail( fn, fn ) fail 可以接受多个参数
        // deferred.catch( fn ) is an alias to deferred.then( null, fn ). Read its page for more information.
        // catch和fail略有不同，catch将返回新的承诺，而fail将返回原始承诺。
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
    // resolve 手动改变deferred对象的执行状态已完成 从而触发 done, reject改变deferred对象的执行状态 已失败 从而触发 fail
    $.ajax({
        type: 'post',
        url: base_url + 'pending_package/add_v1',
        data: { warehouse_id, package_weight, facade_status, comment, shelf },
        beforeSend: function() {
            $("#sub_cat").empty();
            $("#sub_cat").append('<option value="0">-请选择-</option>');
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
                file_upload.publish(item, item, `input_packages/${pending_package_id}`, 0).then((json) => {
                    let {code, message, data} = json
                    if (code == 200) {
                        let path = file_upload.splitImagePath(data.new_file_path)
                        resolve(file_upload.splitImagePath(data.new_file_path));
                    } else {
                        // 清空上传图片
                        attachments = [];
                        // 清空上传图片效果
                        $('.text_img_item').remove()
                        alert(message)
                        reject('publish:' + message)
                    }
                }, (err) => {
                    // 清空上传图片
                    attachments = [];
                    // 清空上传图片效果
                    $('.text_img_item').remove()
                    reject('publish_catch:'+ err)
                });
            })
        })
        // 返回pushlish后的路径和pending_package_id
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
        // 关闭弹窗
        close();
        // add_v1 500 报错可以捕获
        // add_v1 then 中throw可以捕获（业务报错）
        // add_v1 then 中代码错误可以捕获比如 result.data.pending_package_id 未定义
        // add_v1 then 中file_upload.publish 的 500错误可以捕获 publish_catch:
        // add_v1 then 中file_upload.publish 的 code != 200（业务报错） 可以捕获 publish:

        console.log('catch', error)
    })
});


$(document).on('click', '#btn_add_pending_package', function() {
    $(this).addClass('btn_disabled').prop('disabled', true);
    if (!confirm('确定要提交未预报包裹信息？')) {
        $(this).removeClass('btn_disabled').prop('disabled', false);
        return;
    }

    const warehouse_id = $('#wh').val();
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
            $("#sub_cat").append('<option value="0">-请选择-</option>');
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

        // 当都处理该promise的错误时的情况
        return file_upload.batchPublish(attachments, '', `input_packages/${pending_package_id}`, 0).catch((error) => {
            // 清空上传图片
            attachments = [];
            // 清空上传图片效果
            $('.text_img_item').remove()
            alert(error)
            // 必须要return Promise.reject，否则file_upload.batchPublish将是resolve
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
        // 关闭弹窗
        close();
        console.log('final catch', error)
    })
});

https://www.jianshu.com/p/0e1c9bec17ad