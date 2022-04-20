def is_prime(n):
    if n == 2:
        return True
    if n % 2 == 0 or n <= 1:
        return False

    limit = int(n**(1/2))
    count = 3
    # Se houver alguma divisão inteira entre 3 e a raiz quadrada de 'n',
    # então esse número não é primo.
    while count <= limit:
        if n % count == 0:
            return False
        count += 2

    return True


def prime_factors(number):
    curr_dividend = number
    curr_divider = 2
    prime_factors = []
    while curr_divider <= curr_dividend:
        # Se a divisão do dividendo atual pelo divisor atual é inteira
        # e o divisor atual é primo
        # então o divisor atual é um fator primo.
        if curr_dividend % curr_divider == 0 and is_prime(curr_divider):
            prime_factors.append(curr_divider)
            curr_dividend = curr_dividend / curr_divider
        else:
            curr_divider += 1

    return prime_factors[-1]


if __name__ == '__main__':
    print(prime_factors(13195))
    print(prime_factors(600851475143))

# Créditos aos super instrutores da Trybe, Felps e Carlos Júnior,
# que me ajudaram a implementar esse algorítmo.
