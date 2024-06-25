# 1. Build an excel sum function ==> summing cells from a sheet
    # parse excel data 
# 2. You walk in spiral pattern in a grid from origin (0, 0). In which square (x y position) will you end up in after n moves. 
# 3. Some SQL questions.
# 4. given a string and integer n, print out all characters that appear at least n times



import csv

def read_excel_data(file_path):
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        data = list(reader)
    return data

def calculate_sum(data):
    total_sum = 0
    for row in data: 
        for cell in row: 
            try:
                value = float(cell)
                total_sum += value
            except ValueError: 
                continue # Skip non-numeric values 
    return total_sum

def main():
    file_path = 'data.csv' #Replace with Excel/CSV file path 
    data = read_excel_data(file_path)
    total_sum = calculate_sum(data)
    print(f'Total sum of cell values in the Excel file: {total_sum}')

if __name__ == '__main__':
    main()


#for large datasets or complex excel files consider libraries like 
    # 1. openpyxl 
    # 2. pandas





# SECOND CHALLENGE ==> SPIRAL TRAVERSAL in grid ***not granted to be square 
def spiral_walk_position(size = (4, 6), start = (0, 0), steps):
    loop_cnt = 0
    def loop_cnt_helper(loop_size = 4 + 6, tot_steps):
        nonlocal loop_cnt
        if (loop_size - tot_steps) < (loop_size / 2):
            return loop_cnt
        loop_cnt += 1
        loop_cnt_helper(loop_size / 2, tot_steps - loop_size)
    
    if (start )


# SQUARE vers



# 4. given a string and integer n, print out all characters that appear at least n times

from collections import defaultdict


def print_char(string, n):
    frequency_cnt = defaultdict(int)
    chars = []
    for char in string: 
        frequency_cnt[char] += 1
        if frequency_cnt[char] >= n and char not in chars: 
            chars.append(char)
    return chars