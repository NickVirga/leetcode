class Solution:
    def myAtoi(self, s: str) -> int:
        
        num = '0123456789'
        
        res = ''
        
        for x in s:
            if x == ' ' and not res:
                continue
            if x in '-+' or x in num:
                res += x
            elif x in num:
                res += x
            else:
                break
        if res == '' or res in '-+':
            return 0
        else:
# to avoid int casting simply run a loop and use ord(char) - ord('0')
            if int(res) < -(2**31):
                return -(2**31)
            elif int(res) > (2**31 - 1):
                return (2**31 - 1)
            else:
                return int(res)
        
        
solution = Solution()

print(solution.myAtoi(" -042test"))
