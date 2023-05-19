type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
}

function Button(props: ButtonProps) {
  const { children, onClick } = props

  return (
    <button
      type="button"
      className="inline-flex rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-gray-50"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { Button }
