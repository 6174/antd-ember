```html
\{{#io-form-validator submitForm="saveAction"}}
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">
                Email address
            </label>
            {{input 
                class="form-control"
                value=model.email
                type="email" 
                id="assetsNo" 
                required=true
                placeholder="Email"
                }}
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">
                Password
            </label>
            {{input 
                class="form-control"
                value=model.password
                type="password"  
                required=true
                placeholder="Password"
                }}
        </div>
        <div class="checkbox">
            <label>
                {{input 
                    class="form-control"
                    checked=model.checkMeOut
                    required=true
                    type="checkbox"}}
            </label>
        </div>
        <button type="submit" class="btn btn-default">
            Submit
        </button>
    </form>
\{{/io-form-validator}}
```

