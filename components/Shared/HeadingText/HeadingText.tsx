type Props = {
    title: string,
    description: string
}


const HeadingText = ({title, description}: Props) => {
    return (
        <div>
            <h1 className='text-[#FFFFFF] text-2xl md:text-4xl text-center font-bold pt-10'>{title}</h1>
            <p className='text-[#F1F1F2] text-sm md:text-xl text-center mt-1'>{description}</p>

        </div>
    )
}

export default HeadingText