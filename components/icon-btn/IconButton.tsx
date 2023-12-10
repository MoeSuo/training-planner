
export default function IconButton(props: React.ComponentPropsWithoutRef<'button'>){
return <button type="button" {...props}>
    {props.children}
    
</button>
}