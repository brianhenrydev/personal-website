export default function ListCommands({ commands }) {

  return commands.map(
    ({ cmd, desc, link }, idx) =>
      <li
        key={idx}
        className="link-text"
      >
        <a
          href={link}
          target=""
        >
          {cmd}
        </a> - <span className="text-desc">{desc}</span>
      </li>
  )

}
