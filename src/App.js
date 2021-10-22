import Breadcrumb from "./Breadcrumb.js";
import Nodes from "./Nodes.js";
import ImageView from "./ImageView.js";
import api from "./api.js";
import cache from "./cache.js";

export default class App 
{
    constructor($target)
    {
        this.$target = $target;
        
        this.nodesOnClick = async (nodeId, name, filePath) =>
        {
            const getParent = cache.get(nodeId);
            if (name === "..")
            {
                this.breadcrumb.pop();
                nodeId = getParent.parentId;
            }
            else if (filePath === "null")
            {
                this.breadcrumb.push(nodeId, name);
                let updateDir = cache.get(getParent.parentId+"dir");
                for (let i in updateDir)
                    if (updateDir[i].id === nodeId)
                    {
                        let tmp = updateDir.splice(i, 1);
                        updateDir.unshift(tmp[0]);
                        cache.set(getParent.parentId+"dir", updateDir);
                        break;
                    }
            }
            await this.onClick(nodeId, filePath);
        };
        
        
        this.loading = new Loading($target);
        this.breadcrumb = new Breadcrumb({$target, onClick: async nodeId=> await this.onClick(nodeId, "null")});
        this.nodes = new Nodes({$target, getInitData: async _=> await this.onClick("null", "null"), onClick: async (nodeId, name, filePath) => await this.nodesOnClick(nodeId, name, filePath)});
        this.imageView = new ImageView($target);
    }
    
    async onClick(nodeId, filePath)
    {
        if (filePath === "null" || filePath === null)
        {
            this.loading.setState(true);
            const result = await api.fetchDir(nodeId);
            this.loading.setState(false);
            if (result.isError)
                this.nodes.setState([], null, result.data);
            else
                this.nodes.setState(result.data, nodeId, false);
        }
        else
            this.imageView.setState(filePath, true);
    }
}


class Loading
{
    isVisible = false;
    
    constructor($target)
    {
        this.$loadingNode = $target.querySelector(".Loading");
        this.render();
    }
    
    setState(isVisible)
    {
        this.isVisible = isVisible;
        this.render();
    }
    
    render()
    {
        if (this.isVisible)
            this.$loadingNode.classList.remove("hide");
        else
            this.$loadingNode.classList.add("hide");
    }
}