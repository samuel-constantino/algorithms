def is_prime(n):
    if n == 2:
        return True
    if n % 2 == 0 or n <= 1:
        return False

    limit = int(n**(1/2))
    for i in range(3, limit + 1, 2):
        if n % i == 0:
            return False

    return True


def prime_factors(number):
    curr_dividend = number
    curr_divider = 2
    prime_factors = []
    while curr_divider <= curr_dividend:
        # Se a divisão do dividendo atual pelo divisor atual é inteira
        # e o divisor atual é primo
        if curr_dividend % curr_divider == 0 and is_prime(curr_divider):
            prime_factors.append(curr_divider)
            curr_dividend = curr_dividend / curr_divider
        else:
            curr_divider += 1

    return prime_factors[-1]


if __name__ == '__main__':
    print(prime_factors(13195))
    print(prime_factors(600851475143))
