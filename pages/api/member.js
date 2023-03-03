import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:8080",
});

// create a member
export async function createMember(member) {
  const response = await api.post("/member", member);

  if (response.status == 201) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
}

// update member
export async function updateMember(member) {
  const data = {
    yearOfStudy: member.yearOfStudy,
    location: member.location,
    hometown: member.hometown,
    program: member.program,
  };

  const response = await api.put(`/member/${member.id}`, data);

  if (response.status == 200) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
}

// get members
export async function getMembers() {
  const response = await api.get("/members");

  const dataArray = response.data.members;

  if (response.status == 200) {
    return dataArray;
  } else {
    throw new Error(response.problem);
  }
}
