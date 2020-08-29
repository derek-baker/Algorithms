# Set Cover Problem

"Given a universe of ```n``` elements, a collection of subsets of ```U``` (say ```S = {S1, S2, ..., Sm}```) where every subset ```Si``` has an associated cost. Find a minimum cost subcollection of ```S``` that covers all elements of ```U```."

Example: 

```
U = {1, 2, 3, 4, 5}
S = {S1, S2, S3}

S1 = {4, 1, 3}
    Cost(S1) = 5

S2 = {2, 5}
    Cost(S2) = 10

S3 = {1, 4, 3, 2}
    Cost(S3) = 3

Output: Minimum cost of set cover is 13 and set cover is {S2, S3}

There are two possible set covers: 
    {S1, S2} with cost 15
    or
    {S2, S3} with cost 13
```
<br>

### Set Cover was proven (by Karp) to be NP-Hard 
"There is no polynomial time solution available for this problem". 
However, "there is a polynomial time Greedy approximate algorithm", which "provides a ```log n``` approximate algorithm".
Note that this approximate solution may not provide the 

<hr>
<br>

### Appriximate Greedy Algorithm
"Let ```U``` be the universe of elements, ```{S1, S2, ...SM}``` be collection of subsets of ```U``` and ```Cost(S1), Cost(S2), ...Cost(SM)``` be costs of subsets.

```
1) Let I represent the set of elements included so far. Initialize I = {}

2) Do the following while I is not the same as U:
    a) Find the set Si in {S1, S2, ...SM} whose cost effectiveness is smallest
        (i.e., the ratio of cost C(Si) and number of newly added elements is minimum).
        Basically, we pick the set for which the following is minimum.

    b) Add elements of above picked Si to I, i.e., I = I Union Si

```



<hr>

https://www.geeksforgeeks.org/set-cover-problem-set-1-greedy-approximate-algorithm/

