from itertools import combinations  
def longestPalindrome(s):
    if s==s[::-1]:
        return s
    else:
        string=""
        for i in range(len(s)):
            for j in range(len(s)-1,-1,-1):
                k=s[i:j]
                if(k==k[::-1] and len(k)>len(string)):
                    string = k
    return string if len(string)>0 else "no palindrome strinhg"

n=input()
print(longestPalindrome(n))
    
