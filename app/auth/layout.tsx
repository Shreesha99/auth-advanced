const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-200 to-red-500">
            {children}
        </div>
     );
}
 
export default AuthLayout;