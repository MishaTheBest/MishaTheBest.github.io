'use strict';
class Graph {
    constructor(minIndex=1,graphElementsValues=[0]){
        this.minIndex = minIndex;
        this.maxIndex = graphElementsValues.length;
        this.minRange = Math.min.apply(null, graphElementsValues);
        this.maxRange = Math.max.apply(null, graphElementsValues);
        this.GraphElement = document.getElementById("mGraph");
        this.graphElementsValues = graphElementsValues;
        this.elemWidth = ((this.GraphElement.clientWidth || this.GraphElement.offsetWidth)/this.maxIndex)
            -4;
    }
    createGraphInner(value){
        let graphInnerDivWrapper = document.createElement("div");
        graphInnerDivWrapper.classList.add("graphInnerDivWrapper");
        let graphInnerDiv = document.createElement("div");
        graphInnerDiv.classList.add("graphInnerDiv");
        graphInnerDiv.style.width = this.elemWidth+"px";
        graphInnerDiv.style.height = value + "px";
        if(value === this.minRange){
            graphInnerDiv.classList.add("bestPrice");
        }
        graphInnerDivWrapper.appendChild(graphInnerDiv);
        let innerValue = document.createElement("div");
        innerValue.classList.add("graphInnerValue");
        innerValue.innerHTML = `<span>${value}</span>`;
        graphInnerDivWrapper.appendChild(innerValue);
        this.GraphElement.appendChild(graphInnerDivWrapper);
    }
    get getGraphElement(){
        return this.GraphElement;
    }
    draw(){
        for(let i = 0;i<this.maxIndex;i++){
            this.createGraphInner(this.graphElementsValues[i]);

        }
    }
    ChangeElementsWidth(){
        this.elemWidth=((this.GraphElement.clientWidth || this.GraphElement.offsetWidth)/this.maxIndex)-4;
        let elements = document.querySelectorAll(".graphInnerDiv");
        for(let i = 0;i<elements.length;i++){
            elements[i].style.width = this.elemWidth+"px";
        }
    }
}
let graphElementsValues = [100,300,200,600,25,149,660,800,100,102,500];
const graph = new Graph(1,graphElementsValues);
graph.draw();
document.body.onresize = function (){
    graph.ChangeElementsWidth();
    console.log(graph.elemWidth);
};
console.log(graph.GraphElement.offsetWidth);