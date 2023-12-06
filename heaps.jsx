//left children:2i+1
//right children:2i+2
//parent: (i-1)/2 

// let minHeap = function () {
//     let heap = [];
//     constructor(insert, remove){
//         this.insert = 
//     }
// }

//push items
//comparing the pushed item with its parent
//if parent is larger than the pushed item then we swap
//while loop continue doing this swap 
//until the legal parent is found or we've reached top of the heap
function heappush(heap,newKey){
    heap.push(newKey);
    let curr = heap.length-1;

    while(curr > 0){
        let parent = Math.floor((curr-1)/2)
        if( heap[curr]<heap[parent] ){
            [ heap[curr], heap[parent] ] = [ heap[parent],heap[curr] ]
            curr = parent
        } else{
            break
        }
    }

}
//swap the root node with last node
//remove the root node by popping the last item out of the array
//compare the new root node's key with it's children:
//if key is less than both of it's children keys then heap is stable
//else, swap the key with the smaller child key
function heappop(heap){
    const n = heap.length;
    [ heap[0], heap[n-1] ] = [ [ heap[n-1],heap[0] ] ]

    const removedKey = heap.pop();

    let curr = 0;
    while(2*curr + 1 < heap.length){
        const leftIndex = 2*curr+1;
        const rightIndex = 2*curr+2;
        const minChildIndex = (rightIndex<heap.length && heap[leftIndex]) ? rightIndex : leftIndex;
        if(heap[minChildIndex] < heap[curr]){
            [heap[minChildIndex],heap[curr]] = [heap[curr],heap[minChildIndex]]
            curr = minChildIndex
        }else{
            break
        }
    }
}

function heapify(arr){
    const heap = []
    for(let item of arr){
        heappush(heap, item)
    }
    return heap;
}