import { faker } from "@faker-js/faker";

export default [
  {
    link: "https://cdn.midjourney.com/9eff295a-20fe-4895-8bb0-8d8bb72e75de/grid_0.png",
  },
  {
    link: "https://cdn.midjourney.com/1071cab7-f6d9-490f-9182-2f84512defb5/0_2.png",
  },
  {
    link: "https://cdn.midjourney.com/716b8cec-15f5-4d1f-afc0-28f13851b0f8/0_0.png",
  },
  {
    link: "https://media.discordapp.net/attachments/1089223599501615257/1090763189932789781/Peace2AlWorlds_Jordan_1_fog_background_angled_multiple_1c700122-6d18-4239-850b-1056b17e4206.png?width=1034&height=1034",
  },
  {
    link: "https://cdn.midjourney.com/fe462071-9bd9-4db1-81ab-8417d3ba3735/0_2.png",
  },
  {
    link: "https://cdn.midjourney.com/fd151728-ecd4-4b75-b998-593ada0ec377/0_1.png",
  },
];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    message: faker.lorem.paragraph(3),
    date: faker.date.past(1),
  };
}

export const usersSeed = createUserSeed();

function createUserSeed() {
  return Array.from({ length: 5 }).map((_) => {
    return createRandomUser();
  });
}
