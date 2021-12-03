//Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

/* int maxSubArrayProduct(int[] arr, int size) {
    int maxProduct = arr[0]
    int imax = arr[0]
    int imin = arr[0]
    for(int i=1 to i<size) {
        if(arr[i]<0) 
            swap(imax,imin)
        imax = max(arr[i], imax * arr[i])
        imin = min(arr[i],imin * arr[i])
        maxProduct = max(maxProduct, imax)
    }
    return maxProduct
}  */
