#include <stdio.h>
//there is a frog wants to across the river
//have 10 stones / 11 feet in total inside the river
//every time this frog can only move one or two feet
//count how many ways are there for this frog to cross the river?
int num_ways(int n){
    if (n==1 || n==0)
    {
        return 1;
    }else{
        return num_ways(n-1) + num_ways(n-2);
    }
}
int main(){
    int a = num_ways(12);
    printf("%d\n", a);
    return 0;
}