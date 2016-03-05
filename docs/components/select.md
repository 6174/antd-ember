

```html
<!-- content[Array(Object)] 对应选择的 option -->
<!-- label 默认为 Object.title -->
<!-- sortBy 自定义字段 -->
{{io-searchable-select
    content=list
    sortBy="title"
    on-change=(action "update")}}
```


```html
<i class="fa fa-{{icon-name}}"></i>
```
