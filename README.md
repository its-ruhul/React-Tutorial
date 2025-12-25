CREATE A MINESWEEPER GAME OF 8 * 8 GRID WITH 16 MINES:

Z = 0

1. 8 * 8 GRID
    class="a"       a = 0, 1, 2, 3, ..., 63

2. Choose 16 random no. out of 64
    round off (rand * 64)
    add to list if the no. isn't in array already

3. check all these boxes for mine and calculate the proximity number

    a-9,    a-8,    a-7,
    a-1,    a,      a+1,
    a+7,    a+8,    a+9

    also check whether the above numbers are in the matrix or not.

4. Set mines to -1 and set blanks to 0

5. Render the matrix and graphics
Z = 1

Z = 2