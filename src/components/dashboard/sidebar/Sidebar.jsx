import React from "react";

const Menu = [
  {
    id: "01",
    imageUrl: "https://mcqhall.com/SidebarIcons/homeIcon.svg",
    text: "Dashboard",
  },
  {
    id: "02",
    imageUrl: "https://mcqhall.com/SidebarIcons/questionBankIcon.svg",
    text: "Question Bank",
  },
  {
    id: "03",
    imageUrl: "https://mcqhall.com/SidebarIcons/examsIcon.svg",
    text: "Exam",
  },
  {
    id: "04",
    imageUrl: "https://mcqhall.com/SidebarIcons/savedIcon.svg",
    text: "Saved",
  },
  {
    id: "05",
    imageUrl: "https://mcqhall.com/SidebarIcons/libraryIcon.svg",
    text: "Library",
  },
  {
    id: "06",
    imageUrl: "https://mcqhall.com/SidebarIcons/hallIcon.svg",
    text: "Hall",
  },
  {
    id: "07",
    imageUrl: "https://mcqhall.com/SidebarIcons/classIcon.svg",
    text: "Class",
  },
  {
    id: "08",
    imageUrl: "https://mcqhall.com/SidebarIcons/videoIcon.svg",
    text: "Video Guide",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-primary-purple h-screen ">
      <div className="py-3">
        {Menu.map((item) => {
          return (
            <div
              key={item.id}
              className="flex p-3 hover:bg-primary-white cursor-pointer"
            >
              <img src={item.imageUrl} alt="Icon" className="h-5 w- 5 pt-0.5" />
              <h1 className=" text-white ml-5">{item.text}</h1>
            </div>
          );
        })}
      </div>
      <hr className="text-white mx-2" />
      <div className="p-3 flex flex-col w-full ">
        <p className="text-white w-full flex justify-between">
          {" "}
          Student ID: Z73IDR9T{" "}
          <span className="text-sm mr-5 cursor-pointer">copy</span>
        </p>

        <button
          type="button"
          className="flex my-5 ml-2 py-3 rounded-full px-5 w-fit border border-white "
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAyNCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNi4zNDg3IDAuMDA4NDUyNzlIMTUuNDY1OEwxMy45NTk3IDAuMDM2MDQ5OFYwLjg5MDMwMVYyLjQ2NTQ2QzEyLjg1MjMgMi40NjU0NiAxMS45NTE3IDMuMzQ3MDMgMTEuOTUxNyA0LjQzMTA2QzExLjk1MTcgNS41MTUwOSAxMi44NTIzIDYuMzk2NjYgMTMuOTU5NyA2LjM5NjY2VjguODUzNjdIMTcuOTc1OVY3Ljg3MDg3QzE3Ljk3NTkgNy4zMjg4NSAxOC40MjYyIDYuODg4MDcgMTguOTc5OSA2Ljg4ODA3QzE5LjUzMzYgNi44ODgwNyAxOS45ODM5IDcuMzI4ODUgMTkuOTgzOSA3Ljg3MDg3VjguODUzNjdIMjIuNDk0TDI0IDguODM2MzFMMjQuMDAwMSA3LjM3OTQ3VjYuMzk2NjZDMjQuMDAwMSAyLjAwMDEgMTkuNTk2NCAtMC4xNTMwMzIgMTYuMzQ4NyAwLjAwODQ1Mjc5Wk0yMi45OTYgNy4zNzk0N1Y3Ljg3MDg3SDIyLjQ5NEgyMC45ODhDMjAuOTg4IDYuNzg2ODQgMjAuMDg3MyA1LjkwNTI2IDE4Ljk3OTkgNS45MDUyNkMxNy44NzI0IDUuOTA1MjYgMTYuOTcxOCA2Ljc4Njg0IDE2Ljk3MTggNy44NzA4N0gxNC45NjM4VjUuNDEzODZIMTMuOTU5N0MxMy40MDYgNS40MTM4NiAxMi45NTU3IDQuOTczMDggMTIuOTU1NyA0LjQzMTA2QzEyLjk1NTcgMy44ODkwNSAxMy40MDYgMy40NDgyNiAxMy45NTk3IDMuNDQ4MjZIMTQuOTYzOFYxLjQ4MjY2VjAuOTkxMjU1SDE1LjQ2NThIMTUuNjg4MUMyMC41MzIxIDAuOTkxMjU1IDIyLjk5NiAzLjQwNzkxIDIyLjk5NiA3LjI3NTI4VjcuMzc5NDdaIiBmaWxsPSJ3aGl0ZSIvPgogICAgPHBhdGggZD0iTTE1LjA2MDUgOS44MzY0NkMxMy45NTMxIDkuODM2NDYgMTMuMDUyNCAxMC43MTggMTMuMDUyNCAxMS44MDIxSDExLjA0NDRWOS4zNDUwNkgxMC4wNDAzQzkuNDg2NjIgOS4zNDUwNiA5LjAzNjMxIDguOTA0MjcgOS4wMzYzMSA4LjM2MjI2QzkuMDM2MzEgNy44MjAyNCA5LjQ4NjYyIDcuMzc5NDYgMTAuMDQwMyA3LjM3OTQ2SDExLjA0NDRWMi45NTY4NUg5LjY5ODQ3QzQuMzUwOTggMi45NTY4NSAwIDcuMjE1ODIgMCAxMi40NTAyQzAgMTUuMzA5MiAxLjI5NjcxIDE3Ljk4NzMgMy41NTcyOSAxOS43OTc2TDUuNTIyMTkgMjEuMzcxNlYyMi43MDM4QzQuOTM5MzUgMjIuOTA3MiA0LjUxODE1IDIzLjQ0NzggNC41MTgxNSAyNC4wODc2QzQuNTE4MTUgMjQuNzY3MiA0Ljk5MjU2IDI1LjMzNTIgNS42MzI2MyAyNS41MDQ4QzUuNTYyODUgMjUuNjc0MyA1LjUyMjE5IDI1Ljg1ODYgNS41MjIxOSAyNi4wNTI3QzUuNTIyMTkgMjYuNzAyMyA1Ljk1NjQzIDI3LjI0ODggNi41NTMzMyAyNy40NDQ4QzYuNzYxMTcgMjkuMTQ5IDguMjQ0NjMgMzAuNDc1MyAxMC4wNDAzIDMwLjQ3NTNDMTEuODM2MSAzMC40NzUzIDEzLjMxOTUgMjkuMTQ5IDEzLjUyNzQgMjcuNDQ0OEMxNC4xMjQzIDI3LjI0ODggMTQuNTU4NSAyNi43MDIzIDE0LjU1ODUgMjYuMDUyN0MxNC41NTg1IDI1Ljg1ODYgMTQuNTE3OCAyNS42NzQzIDE0LjQ0ODEgMjUuNTA0M0MxNS4wODgxIDI1LjMzNDMgMTUuNTYyNSAyNC43NjY3IDE1LjU2MjUgMjQuMDg3MUMxNS41NjI1IDIzLjQ0NzMgMTUuMTQxMyAyMi45MDY3IDE0LjU1ODUgMjIuNzAzM1YyMS4zNzExTDE2LjUyMzQgMTkuNzk3MkMxOC43ODQgMTcuOTg3MyAyMC4wODA3IDE1LjMwOTIgMjAuMDgwNyAxMi40NTAyVjExLjgwMjFIMTcuMDY4NkMxNy4wNjg2IDEwLjcxOCAxNi4xNjggOS44MzY0NiAxNS4wNjA1IDkuODM2NDZaTTkuNjk4NDcgMy45Mzk2NUgxMC4wNDAzVjYuMzk2NjVDOC45MzI4OSA2LjM5NjY1IDguMDMyMjcgNy4yNzgyMyA4LjAzMjI3IDguMzYyMjZDOC4wMzIyNyA5LjQ0NjI5IDguOTMyODkgMTAuMzI3OSAxMC4wNDAzIDEwLjMyNzlWMTEuODAyMUg4LjAzMjI3QzguMDMyMjcgMTAuNzE4IDcuMTMxNjYgOS44MzY0NiA2LjAyNDIxIDkuODM2NDZDNC45MTY3NiA5LjgzNjQ2IDQuMDE2MTQgMTAuNzE4IDQuMDE2MTQgMTEuODAyMUgxLjAyOTE0QzEuMzY4NSA3LjQxMDkxIDUuMTI3MSAzLjkzOTY1IDkuNjk4NDcgMy45Mzk2NVpNNC4xOTI4NSAxOS4wMzdDMi4yNTQ1NiAxNy40ODQ2IDEuMTA2OTUgMTUuMjIxMiAxLjAxMTA2IDEyLjc4NDlINS4wMjAxN1YxMS44MDIxQzUuMDIwMTcgMTEuMjYgNS40NzA0OCAxMC44MTkzIDYuMDI0MjEgMTAuODE5M0M2LjU3NzkzIDEwLjgxOTMgNy4wMjgyNCAxMS4yNiA3LjAyODI0IDExLjgwMjFWMTIuNzg0OUgxMC4wNDAzVjE0Ljc1MDVDOC45MzI4OSAxNC43NTA1IDguMDMyMjcgMTUuNjMyIDguMDMyMjcgMTYuNzE2MUM4LjAzMjI3IDE3LjgwMDEgOC45MzI4OSAxOC42ODE3IDEwLjA0MDMgMTguNjgxN1YyMi42MTI5SDYuNTI2MjJWMjAuOTA1OEw0LjE5Mjg1IDE5LjAzN1pNMTAuMDQwMyAyOS40OTI1QzguODI4NDcgMjkuNDkyNSA3LjgxNDQgMjguNjQ2OCA3LjU4MDk2IDI3LjUyNjlIMTIuNDk5N0MxMi4yNjYzIDI4LjY0NjggMTEuMjUyMiAyOS40OTI1IDEwLjA0MDMgMjkuNDkyNVpNMTMuMDUyNCAyNi41NDQxSDcuMDI4MjRDNi43NTExMyAyNi41NDQxIDYuNTI2MjIgMjYuMzIzNSA2LjUyNjIyIDI2LjA1MjdDNi41MjYyMiAyNS43ODE5IDYuNzUxMTMgMjUuNTYxMyA3LjAyODI0IDI1LjU2MTNIMTMuMDUyNEMxMy4zMjk2IDI1LjU2MTMgMTMuNTU0NSAyNS43ODE5IDEzLjU1NDUgMjYuMDUyN0MxMy41NTQ1IDI2LjMyMzUgMTMuMzI5NiAyNi41NDQxIDEzLjA1MjQgMjYuNTQ0MVpNMTQuMDU2NSAyNC41Nzg1SDEzLjA1MjRINy4wMjgyNEg2LjAyNDIxQzUuNzQ3MDkgMjQuNTc4NSA1LjUyMjE5IDI0LjM1NzggNS41MjIxOSAyNC4wODcxQzUuNTIyMTkgMjMuODE2MyA1Ljc0NzA5IDIzLjU5NTcgNi4wMjQyMSAyMy41OTU3SDE0LjA1NjVDMTQuMzMzNiAyMy41OTU3IDE0LjU1ODUgMjMuODE2MyAxNC41NTg1IDI0LjA4NzFDMTQuNTU4NSAyNC4zNTc4IDE0LjMzMzYgMjQuNTc4NSAxNC4wNTY1IDI0LjU3ODVaTTE1Ljg4NzggMTkuMDM3TDEzLjU1NDUgMjAuOTA1OFYyMi42MTI5SDExLjA0NDRWMTcuNjk4OUgxMC4wNDAzQzkuNDg2NjIgMTcuNjk4OSA5LjAzNjMxIDE3LjI1ODEgOS4wMzYzMSAxNi43MTYxQzkuMDM2MzEgMTYuMTc0MSA5LjQ4NjYyIDE1LjczMzMgMTAuMDQwMyAxNS43MzMzSDExLjA0NDRWMTIuNzg0OUgxNC4wNTY1VjExLjgwMjFDMTQuMDU2NSAxMS4yNiAxNC41MDY4IDEwLjgxOTMgMTUuMDYwNSAxMC44MTkzQzE1LjYxNDIgMTAuODE5MyAxNi4wNjQ1IDExLjI2IDE2LjA2NDUgMTEuODAyMVYxMi43ODQ5SDE5LjA2OTZDMTguOTczNyAxNS4yMjEyIDE3LjgyNjEgMTcuNDg0NiAxNS44ODc4IDE5LjAzN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
            alt="Icon"
            className="h-5 w- 5 pt-0.5"
          />
          <span
            className="text-sm text-white ml-2
          "
          >
            {" "}
            2 solution packages remaining
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
