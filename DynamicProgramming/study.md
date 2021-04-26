# Dynamic Programming

## Longest Increasing Subsequence (LIS)

> For a sequence a1, a2, ... , an, find the length of the longest increasing subsequence ai1, ai2, ..., aik
>
> Constraints: i1 < i2 < ... < ik; ai1 < ai2 < ... aik

```
LIS([3, 1, 8, 2, 5]); // 1->2->5: 3
LIS([5, 2, 8, 6, 3, 6, 9, 5]); // 2->3->6->9: 4
```

**LIS = 1 + previous longest path**

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
def lis(A):
  L = [1] * len(A)

  for i in range(1, len(L)):
    subproblems = [L[k] for k in range(i) if A[k] < A[i]]
    L[i] = 1 + max(subproblems, default = 0)

  return max(L, default = 0)
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

---

## Box Stacking

> Given `n` boxes `[(L1, W1, H1), (L2, W2, H2), ... , (Ln, Wn, Hn)]` where box `i` has
>
> length `Li`, width `Wi`, and height `Hi`, find the height of the tallest possible stack.
>
> Box `(Li, Wi, Hi)` can be on top of box `(Lj, Wj, Hj)` if `Li < Lj and Wi < Wj`.

```
givenStack = [(2, 3, 3), (2, 2, 4), (4, 4, 2)];
possibleStack = [[(4, 4, 2), (2, 2, 4)],
                  [(4, 4, 2), (2, 3, 3)]];
height = 6; // 2 + 4

givenStack = [(4, 5, 3), (2, 3, 2), (3, 6, 2), (1, 5, 4), (2, 4, 1), (1, 2, 2)];
possibleStack = [[(4, 5, 3), (2, 3, 2), (1, 2, 2)],
                  [(4, 5, 3), (2, 4, 1), (1, 2, 2)],
                  [(3, 6, 2), (2, 3, 2), (1, 2, 2)],
                  [(2, 4, 1), (1, 2, 2)], ...]
height = 7; // 2 + 2 + 3
```

### Subproblem

: largest height of stack with box `height[(Li, Wi, Hi)]` at the bottom

- `height[(2, 3, 2)]` = 4
- `height[(3, 6, 2)]` = 6
- `height[(4, 5, 3)]` = 7; What subproblems are needed to solve `height[(4, 5, 3)]`?

  - `height[(2, 3, 2)]` = 4, `height[(2, 4, 1)]` = 3, `height[(1, 2, 2)]` = 2
  - `height[(4, 5, 3)]` = 3 + `max{height[(2, 3, 2)], height[(2, 4, 1)], height[(1, 2, 2)]}` = 7

- Generalization
  1. sort the boxes by length or width
  2. Let `S` be the set of all boxes that can be stacked above `(Li, Wi, Hi)`
  3. `height[(Li, Wi, Hi)]` = `Hi` + `Max{height[(Lj, Wj, Hj) where (Lj, Wj, Hj) in S]}`

```
def tallestStack(boxes):
  boxes.sort(key = lambda x: x[0])
  heights = {box: box[2] for box in boxes}

  for i in range(1, len(boxes)):
    box = boxes[i]
    S = [boxes[j] for j in range(i) if canBeStacked(boxes[j], box)]
    heights[box] = box[2] + max([heights[box] for box in S], default = 0)

  return max(heights.values(), default = 0)

def canBeStacked(top, bottom):
  return top[0] < bottom[0] and top[1] < bottom[1]
```
