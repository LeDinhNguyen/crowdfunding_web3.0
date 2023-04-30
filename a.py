def isPrime(n):
    count =0 
    if n == 0 or n == 1:
        return False
    else:
        for i in range(2, n):
            if n % i == 0 :
                count += 1
    return count == 0

c = 0
for i in range(2000):
    if isPrime(i):
        c += 1

print(c)