# Dynamic Programming

## Longest Increasing Subsequence (LIS)

> For a sequence a1, a2, ... , an, find the length of the longest increasing subsequence ai1, ai2, ..., aik
>
> Constraints: i1 < i2 < ... < ik; ai1 < ai2 < ... aik

```
LIS([3, 1, 8, 2, 5]); // 1->2->5: 3
LIS([5, 2, 8, 6, 3, 6, 9, 5]); // 2->3->6->9: 4
```

**LIS = Longest Path + 1(including the starting node)**

### Method

```
// Given:
[3, 1, 8, 2, 5]
```

1. Visualize Examples
2. Find an appropriate subproblem

   - Known 1: All increasing subsequences are subsets of original sequence.
   - Known 2: All increasing subsequences have a start and end.

- Subproblem: `LIS[k]` = LIS ending at index `k`; ex) `LIS[3] = 2`

3. Find relationships among subproblems

   - What subproblems are needed to solve `LIS[4]`?
     - `LIS[0]`, `LIS[1]`, `LIS[3]` connect to `LIS[4]`
     - thus, `LIS[4] = 1 + max{LIS[0], LIS[1], LIS[3]} == 3`

4. Generalize the relationship

```
// Given:
A = [5, 2, 8, 6, 3, 6, 9, 5]
```

- How do we solve `LIS[5]`?
  `LIS[5] = 1 + max{LIS[k] | k < 5, A[k] < A[5]} => 1 + max{LIS[0], LIS[1], LIS[4]}`

  thus, `LIS[n] = 1 + max{LIS[k] | k < n, A[k] < A[n]}`

5. Implement by solving subproblems in order

```
// Python
def lis(A):
  L = [1] * len(A)
  for i in range(1, len(L)):
    subproblems = [L[k] for k in range(i) if A[k] < A[i]]
    L[i] = 1 + max(subproblems, default = 0)
  return max(L, default = 0)


// Typescript
const lis = (A: number[]): number => {
  let sequence = new Array(A.length).fill(1);
  let subproblems: number[] = [];

  for (let i = 1; i < A.length; i++) {
    subproblems = sequence.filter(k => A[k] < A[i]);
    sequence[i] = 1 + Math.max(...subproblems);
  }

  return Math.max(...sequence);
}
```

## How do we actually get the sequence?

- Keep track fo previous indices

```
// Given:
A = [3, 1, 8, 2, 5]
prev[0] = -1; // doesn't have a connection with any of previous nodes
prev[1] = -1; // doesn't have a connection with any of previous nodes
prev[2] = 0; // connected to index 0, 1; either index works
prev[3] = 1; // connected index 1
prev[4] = 3; // connected to index 3
```
