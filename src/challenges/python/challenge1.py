def challenge1(num):
    total_mult_three = (num - 1) // 3
    total_mult_five = (num - 1) // 5
    total_mult_fifteen = (num - 1) // 15

    sum_pa_three = total_mult_three * (3 + total_mult_three * 3) / 2
    sum_pa_five = total_mult_five * (5 + total_mult_five * 5) / 2
    sum_pa_fifteen = total_mult_fifteen * (15 + total_mult_fifteen * 15) / 2

    return int(sum_pa_three + sum_pa_five - sum_pa_fifteen)


print(challenge1(10))
