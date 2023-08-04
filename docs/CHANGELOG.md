# CHANGELOG

## v0.0.11 (2023-08-04)

formatter.removeThousandSeparator增加第二个参数（可选参数），作用是当`参数1`为`null、undefined、""`时，若有第二个参数则返回值是第二个参数的值

示例:
```js
formatter.removeThousandSeparator(null,'') //返回结果是''
```

若没有第二个参数，当`参数1`为`null、undefined、""`时返回对应的值

示例:
```js
formatter.removeThousandSeparator(null) //返回结果是null
```

---

