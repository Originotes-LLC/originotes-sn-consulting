import Image from "next/image";
const discussions = [
  {
    id: "asd",

    commenters: [
      {
        id: 1,
        name: "Emma Dorsey",
        imageUrl:
          "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 2,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 3,
        name: "Lindsay Walton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 4,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 5,
        name: "Hector Gibbons",
        imageUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
];

export function UsedBy() {
  return (
    <ul>
      {discussions.map((discussion) => (
        <li
          key={discussion.id}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
        >
          <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
            <div className="flex -space-x-3">
              <dt className="sr-only">
                100+ happy customers trust Originotes Consulting
              </dt>
              {discussion.commenters
                .map((commenter) => (
                  <dd className="size-11 relative" key={commenter.id}>
                    <Image
                      fill
                      alt={commenter.name}
                      src={commenter.imageUrl}
                      className="rounded-full bg-surface outline-2 outline-surface"
                    />
                  </dd>
                ))
                .concat(
                  <dd className="relative size-11" key={6}>
                    <div className="absolute inset-0 size-11 rounded-full bg-surface outline-2 outline-surface flex items-center justify-center">
                      <p className="text-xs">100+</p>
                    </div>
                  </dd>
                )}
            </div>
          </dl>
        </li>
      ))}
      <p className="text-surface text-xs">
        100+ happy customers trust Originotes Consulting
      </p>
    </ul>
  );
}
