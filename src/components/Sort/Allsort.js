import React, { Component } from 'react'
import Slider from '../Sliders/Slider'
import "./Bars.css"


let speed1 = 50;
let speed2 = 70;
let size = 20;
const swapingcolor ="red";
const comparingcolor ="green";
const intialcolor ="aquamarine";
const finalcolor ="yellow";
const sortedcolor ="purple";
const pivotcolor ="blue";


export default class Allsort extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             arr:[],
             barwidth:"25",
             issorting:false
        }
    }
     
    GenerateRandomArray = (size) => {
        if (this.state.issorting)
        {
            return ;
        }
        const newarr=[]
        for ( let i=0;i<size;i++)
        {   
            let val = getRndInteger(40,550);
            newarr.push(val);
        }
        this.setState({arr:newarr})
    }


    insertionsort = async () => {

        if (this.state.issorting)
        {
            return ;
        }
        this.setState({issorting:true});
        let copyarr = this.state.arr;
        const size = copyarr.length;
        for (let i=0;i<size;i++)
        {
            let current = i;
            for (let j=i;j<size;j++)
            {
                changecolor(current,j,comparingcolor);
                await timer(speed1);
                 
                if (copyarr[current]>copyarr[j])
                {
                    changecolor(j,current,swapingcolor);
                    await timer(speed2); 

                    swap(current,copyarr[j],j,copyarr[current]);
                    await timer(speed2);

                    let temp = copyarr[current];
                    copyarr[current]=copyarr[j];
                    copyarr[j]=temp;
                }
                changecolor(current,j,intialcolor);
            }
            changeonecolor(i,finalcolor)
        }
        await this.finalstate(size);

    }


    doquicksort = async () => {
        if (this.state.issorting)
        {
            return ;
        }
        this.setState({issorting:true});
        let copyarr = this.state.arr;
        const size = copyarr.length;
        await this.quicksort(0,size-1,copyarr);
        await this.finalstate(size);
    }

    quicksort = async (start,end,copyarr) => {
        if (start<end)
        {
            let pivot = await this.partion(start,end,copyarr);
            changeonecolor(pivot,finalcolor)
            await this.quicksort(start,pivot-1,copyarr);
            await this.quicksort(pivot+1,end,copyarr);
        }
    }

    
    partion = async (start,end,copyarr) => {
    
        let pivot = copyarr[end];
        changeonecolor(end,pivotcolor);
        await timer(500);
        let m = start;


        for (let i=start;i<end;i++)
        {
            changecolor(i,end,comparingcolor);
            await timer(speed1);

            if (copyarr[i]<pivot)
            {
                changecolor(i,m,swapingcolor);
                await timer(speed2);

                swap(i,copyarr[m],m,copyarr[i]);
                await timer(speed2);

                let temp = copyarr[m];
                copyarr[m]=copyarr[i];
                copyarr[i]=temp;

                changecolor(i,m,intialcolor);
                m++;
            }

            changecolor(i,end,intialcolor);
            await timer(speed1);
        }

        changecolor(end,m,swapingcolor);
        await timer(speed2);

        swap(end,copyarr[m],m,copyarr[end]);
        await timer(speed2);

        let temp = copyarr[m];
        copyarr[m]=copyarr[end];
        copyarr[end]=temp;

        changecolor(m,end,intialcolor);
        await timer(speed1);

        return m;
    }

    heapsort = async () => {
        if (this.state.issorting)
        {
            return ;
        }
        this.setState({issorting:true});
        let arr = this.state.arr;
        const n = arr.length;
        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            await this.heapify(arr, n, i);
 
        // One by one extract an element from heap
        for (var j = n - 1; j > 0; j--) {
            // Move current root to end
            changecolor(0,j,swapingcolor);
            await timer(speed2);
            
            swap(0,arr[j],j,arr[0]);
            await timer(speed2);

            var temp = arr[0];
            arr[0] = arr[j];
            arr[j] = temp;
            changecolor(j,0,intialcolor);
            await timer(speed1);
            
            changeonecolor(j,finalcolor);
            // call max heapify on the reduced heap
            await this.heapify(arr, j, 0);
        }
        await this.finalstate(n);
    }
 
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    heapify = async (arr, n, i) =>
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n)
        {
            changecolor(largest,l,comparingcolor);
            await timer(speed1);
            
            const copylargest = largest;
            if(arr[l] > arr[largest])
            {
                largest = l;
            }
            changecolor(copylargest,l,intialcolor);
            await timer(speed1);
        }
 
        // If right child is larger than largest so far
        if (r < n)
        {
            changecolor(largest,r,comparingcolor);
            await timer(speed1);

            const copylargest = largest;
            if(arr[r] > arr[largest])
            {
                largest = r;
            }
            changecolor(copylargest,r,intialcolor);
            await timer(speed1);

        }
 
        // If largest is not root
        if (largest !== i) {
            changecolor(largest,i,swapingcolor);
            await timer(speed2);

            swap(largest,arr[i],i,arr[largest]);
            await timer(100);

            var temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            
            changecolor(i,largest,intialcolor);
            await timer(speed1);

            // Recursively heapify the affected sub-tree
            await this.heapify(arr, n, largest);
        }
    }

    bubblesort = async () => {
       
        if (this.state.issorting)
        {
            return ;
        }
        this.setState({issorting:true});
        const copyarr=this.state.arr;
        const arrsize=copyarr.length;
        let last=arrsize-1;

        for (let i=0;i<arrsize ; i++)
        {
            let hasswapped = false;
            for (let j=0;j<arrsize-i-1;j++)
            {
                changecolor(j,j+1,comparingcolor);
                await timer(speed1);

                if (copyarr[j]>copyarr[j+1])
                {

                    changecolor(j,j+1,swapingcolor);
                    await timer(speed2); 

                    swap(j,copyarr[j+1],j+1,copyarr[j]);
                    await timer(speed2);

                    let temp = copyarr[j];
                    copyarr[j]=copyarr[j+1];
                    copyarr[j+1]=temp;
                    hasswapped = true;
                }
                changecolor(j,j+1,intialcolor);
            }
            if (! hasswapped)
            {
                break;
            }
            changeonecolor(last,finalcolor);
            last--;
        }
        await this.finalstate(arrsize);
    }

    finalstate = async (size) => {
        for(let i=0;i<size;i++)
        {
            changeonecolor(i,sortedcolor);
            await timer(70); 
        }
        await timer(1000);
        await this.initialstate(size);
    }

    initialstate = async (size) => {
        for(let i=0;i<size;i++)
        {
            changeonecolor(i,intialcolor);
            await timer(70); 
        }
        this.setState({issorting:false});
    }

    refresh = () => {
        window.location.reload("true");
    }


    changesize = (newsize) => {
        if (this.state.issorting)
        {
            return ;
        }
        size=newsize;
        if (newsize<30)
        {
            this.setState({barwidth:"25"});
        }
        else if (newsize<40)
        {
            this.setState({barwidth:"17"});
        }
        else{
            this.setState({barwidth:"12"});
        }
        this.GenerateRandomArray(newsize);
        // console.log("new size",newsize);
    }

    componentDidMount ()
    {
        this.GenerateRandomArray(size);
    }
    
    render() {
        const newarr = this.state.arr;
        const bars=newarr.map((number,index) =>
                    <span key={index} 
                        className="bar" 
                        style={{height:`${number}px`, width:`${this.state.barwidth}px`}}>
                        
                    </span>)
        
        return (
            <div>
                <Slider updatespeed={changespeed} updatesize={this.changesize}/>
                <div className="array-container">
                        {bars}
                    <div >
                        <button className="btn" onClick ={() => this.GenerateRandomArray(size) }>Create new array</button>
                        <button className="btn" onClick ={() => this.bubblesort() }>Bubble sort</button>
                        <button className="btn" onClick ={() => this.insertionsort() }>Insertion sort</button>
                        <button className="btn" onClick ={() => this.doquicksort() }>Quick sort</button>
                        <button className="btn" onClick ={() => this.heapsort() }>Heap sort</button>
                        <button className="btn" onClick ={() => this.refresh() }>Stop</button>
                    </div>
                </div>
            </div>
        )
    }
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const timer = ms => new Promise(res => setTimeout(res, ms))

const changecolor = (pos1,pos2,clr) =>{
    const arrbar = document.getElementsByClassName("bar");
    arrbar[pos1].style.backgroundColor = clr;
    arrbar[pos2].style.backgroundColor = clr;
}
 
const changeonecolor = (pos1,clr) =>{
    const arrbar = document.getElementsByClassName("bar");
    arrbar[pos1].style.backgroundColor = clr;
}

const swap = (pos1,val1,pos2,val2) => {
    const arrbar = document.getElementsByClassName("bar");
    arrbar[pos1].style.height = `${val1}px`;
    arrbar[pos2].style.height = `${val2}px`;

}

const changespeed = (newspeed) => {
    speed1 =newspeed;
    speed2=newspeed+10;
    // console.log("new speed",speed1,speed2);
}

