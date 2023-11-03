import { rest } from "msw";
import users from "./users.json";

interface PostLoginReqBody {
  id: string;
  pw: string;
}

export default [
  // rest.post("/user/login", (req, res, ctx) => {
  //   if (req.body.id && req.body.pw) {
  //     return res(
  //       ctx.json({
  //         accessToken: "오늘도 여러분과 함께 성장하는 잡캐헨리입니다",
  //       })
  //     );
  //   } else {
  //     return res(ctx.status(400));
  //   }
  // }),

  rest.post<PostLoginReqBody>("/user/login", async (req, res, ctx) => {
    const { id, pw } = req.body;
    // const { id } = req.params;
    // const { pw } = req.params;

    console.log("msw id="+id);
    console.log("msw pw="+pw);

    if (id && pw) {
      const finded = users.find((user) => user.id === id);
      if (!finded) {
        return res(ctx.status(401));
      } else {
        return res(
          ctx.json({
            accessToken: "오늘도 여러분과 함께 성장하는 sunho입니다",
          })
        );
      }
    } else {
      return res(ctx.status(400));
    }
  }),

  rest.get<PostLoginReqBody>("/user/login", async (req, res, ctx) => {
    const { id, pw } = req.body;
    // const { id } = req.params;
    // const { pw } = req.params;

    console.log(id);
    console.log(pw);

    if (id && pw) {
      const finded = users.find((user) => user.id === id);
      if (!finded) {
        return res(ctx.status(401));
      } else {
        return res(
          ctx.json({
            accessToken: "오늘도 여러분과 함께 성장하는 sunho입니다",
          })
        );
      }
    } else {
      return res(ctx.status(400));
    }
  }),
];
