# How it works

I was actually trying to implement select sort after learning bubble sort, And came up with this

In the first loop i assume the first element is the smallest then i check my assumption in the sub for loop. 
The sub for loop starts from the increment of one by the index in the parent for loop,  
because all numbers before it will already be sorted by my algorithm.

## Here's some pseudo 
 - if parent-index = 0 and max=array.length
 - then in parent loop smallest-number = array[parent-index]
 - then child loop starts from child-index = parent-index + 1
 - and max of child loop is array.length - parent-index
 - in the child we do the actual checking with smallest-number if smaller number found 
   - then reassign smallest-number
   - and send the old smallest-number to the index of the found smaller number
   - and send new smallest-number to array[parent-index]
     
:)
