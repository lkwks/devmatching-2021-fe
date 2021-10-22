import cache from "./cache.js";

export default class Breadcrumb
{
    nowPath = [{"null":"root"}];
    
    constructor({$target, onClick})
    {
        this.$breadcrumb = $target.querySelector("ul");
        this.$breadcrumb.addEventListener("click", e =>
        {
            if (e.target.nodeName === "LI")
            {
                this.nowPath = [];
                this.remakePath(e.target.getAttribute("nodeId"));
                this.render();
                onClick(e.target.getAttribute("nodeId"));
            }
        });
        this.render();
    }
    
    push(nodeId, name)
    {
        this.nowPath.push({[nodeId]: name});
        this.render();
    }
    
    pop()
    {
        this.nowPath.pop();
        this.render();
    }
    
    remakePath(nodeId)
    {
        if (nodeId === "null") 
        {
            this.nowPath.unshift({"null":"root"});
            return;
        }
        const info = cache.get(nodeId);
        this.nowPath.unshift({[nodeId]:info.name});
        this.remakePath(info.parentId);
    }
    
    render()
    {
        this.$breadcrumb.innerHTML = this.nowPath.map(obj =>
        {
            const key = Object.keys(obj);
            return `<li nodeId="${key[0]}">${obj[key[0]]}</li>`;
        }).join("");
    }
}