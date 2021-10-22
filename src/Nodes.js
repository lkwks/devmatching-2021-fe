export default class Nodes
{
    noRoot = "";
    
    constructor({$target, getInitData, onClick})
    {
        this.$nodes = $target.querySelector(".Nodes");
        this.$nodes.addEventListener("click", e=>
        {
            if (e.target.nodeName === "IMG")
                onClick(e.target.getAttribute("nodeId"), e.target.getAttribute("title"), e.target.getAttribute("filePath"));
        });
        
        getInitData();
    }
    
    setState(nextData, nodeId, isError)
    {
        if (isError)
            this.noRoot = `
            <li class="ErrMsg">
                ${isError}
            </li>
            `;
        else
            this.noRoot = nodeId==="null" ? "" : `
        <li class="Node">
            <img src="./assets/prev.png" nodeId="${nodeId}" title="..">
        </li>
        `;
        this.data = nextData;
        this.render();
    }
    
    render()
    {
        this.$nodes.innerHTML = this.noRoot + this.data.map(elem => 
        {
            let {type, id, filePath, name} = elem;
            if (type === "DIRECTORY") filePath = "null";
            type = type.toLowerCase();
            return `
        <li class="Node">
            <img src="./assets/${type}.png" nodeId=${id} filePath="${filePath}" title="${name}">
            <span>${name}</span>
        </li>
        `;}).join("");
    }
}
