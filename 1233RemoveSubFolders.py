class Solution(object):
    def removeSubfolders(self, folder):
        """
        :type folder: List[str]
        :rtype: List[str]
        """

        folder.sort()

        ans = [folder[0]]

        for i in range(1, len(folder)):
            lastFolder = ans[len(ans) - 1] + "/"
            
            if not folder[i].startswith(lastFolder):
                ans.append(folder[i])
    

        return ans

        
solution = Solution()

folder = ["/a/b", "/a", "/c/d", "/c/d/e", "/c/f"]
answer = solution.removeSubfolders(folder)

print(answer)