import FileTree from "./fileTree";

export function createFileTree(input) {
  const fileTree = new FileTree();

  let firstObject = input.shift();
  let newArr = input.sort((a, b) => a.id - b.id);
  newArr.unshift(firstObject);

  for (const inputNode of newArr) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}
