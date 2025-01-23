# API

Host - `http://localhost:8000`



## Create

[POST] `/api/users/create`

### Params

```
    {
        userId: string
        username: string
        image: string
    }
```

## Get user

[GET] `/api/users/getUser`

### Params

`?userId=1`