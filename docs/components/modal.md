```html
{{#io-modal show=isShowingModal}}
<div class="modal fade" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <button type="button" class="close" {{action 'toggleModal'}}>×</button>
                <h4 class="modal-title">模态框</h4>
            </div>
            <div class="modal-body">
                 hello modal
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" {{action 'toggleModal'}}>关　闭</button>
            </div>
        </div>
    </div>
</div>
{{/io-modal}}
```

