# INSPIRED BY: http://www.martinbroadhurst.com/greedy-set-cover-in-python.html

# def test_that_subset_elements_contain_universe(universe, elements):
#     if elements != universe:
#         return False
#     return True


def compute_set_cover(universe, subsets):
    # Get distinct set of elements from all subsets
    elements = set(el for setOfEls in subsets for el in setOfEls)
    print('ELEMENTS:')
    print(elements)
    # if test_that_subset_elements_contain_universe(universe, elements) == False:
    #     return None
    covered = set()
    cover = []
    # Add subsets with the greatest number of uncovered points 
    # (As a heuristic for finding a solution)
    while covered != elements:
        # This will help us to find which subset can cover at the least cost
        compute_cost = lambda candidate_subset: len(candidate_subset - covered)
        subset = max(subsets, key = compute_cost)        
        cover.append(subset)
        
        print('\nSELECTED SUBSET: ')
        print(subset)
        print('COVERED: ')
        print(covered)
        
        # Perform bitwise OR and assigns value to the left operand.
        covered |= subset 
    return cover


def main():
    universe = set(range(1, 11))
    subsets = [
        set([1, 2, 3, 8, 9, 10]),
        set([1, 2, 3, 4, 5]),
        set([4, 5, 7]),
        set([5, 6, 7]),
        set([6, 7, 8, 9, 10]),
    ]

    cover = compute_set_cover(universe, subsets)
    print('\nLOW-COST SET COVER:')
    print(cover)

if __name__ == '__main__':
    main()