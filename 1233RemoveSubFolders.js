/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = (folder) => {
  folder.sort();

  const ans = [folder[0]];

  for (let i = 1; i < folder.length; i++) {
    const lastFolder = ans[ans.length - 1] + "/";

    if (!folder[i].startsWith(lastFolder)) {
      ans.push(folder[i]);
    }
  }

  return ans
};

// removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]);
// removeSubfolders(["/a","/a/b/c","/a/b/d"])
// removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"])
// removeSubfolders(["/ab","/abc","/abcd"])
