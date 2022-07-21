import tw from 'twin.macro'

const styles = {
    btn: tw`inline-flex items-center gap-1 bg-indigo-500 text-sm text-zinc-50 font-medium p-3 rounded-lg drop-shadow-md  transition-colors hover:bg-indigo-600`,
    icon: tw`text-lg`
}

export default function Button({ icon, children, ...props }) {
    const Icon = icon

    return (
        <button type="button" css={styles.btn} {...props}>
            {children} <Icon css={styles.icon} />
        </button>
    )
}
