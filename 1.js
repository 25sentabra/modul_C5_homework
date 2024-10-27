const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const students = xmlDOM.querySelectorAll("student");
const result = [];

students.forEach(student => {
  const nameNode = student.querySelector("name");
  const firstName = nameNode.querySelector("first").textContent;
  const secondName = nameNode.querySelector("second").textContent;
  const langAttr = nameNode.getAttribute("lang");
  const ageNode = student.querySelector("age");
  const profNode = student.querySelector("prof");

  result.push({
    name: `${firstName} ${secondName}`,
    lang: langAttr,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
  });
});

console.log('list:', result);