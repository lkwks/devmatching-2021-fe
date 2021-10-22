export default class ImageView
{
    constructor($target)
    {
        this.$imageView = $target.querySelector(".ImageViewer");
        this.imgNode = this.$imageView.querySelector("img");
        
        $target.addEventListener('click', e=>{
            if (e.target === this.$imageView)
                this.setState(null, false);
        });
    
        window.addEventListener('keyup', e=>{
            if (e.keyCode === 27)
                this.setState(null, false);
        });
        
    }
    
    setState(filePath, isVisible)
    {
        this.filePath = filePath;
        this.isVisible = isVisible;
        this.render();
    }
    
    render()
    {
        if (this.isVisible)
        {
            this.imgNode.setAttribute("src", `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${this.filePath}`);
            this.$imageView.classList.remove("hide");
        }
        else
            this.$imageView.classList.add("hide");
    }
}