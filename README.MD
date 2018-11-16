# JUST A TOY
# DON'T USE

```tsx
import * as React from "react"
import usePromise from "thismodule"
function Root(){
    const [{value,loading},loadValue] = usePromise(p)
    return <div>
        <span>{value}</span>
        <span>{loading?"...":""}</span>
        <button onClick={loadValue}>load</button>
    </div>
}
```