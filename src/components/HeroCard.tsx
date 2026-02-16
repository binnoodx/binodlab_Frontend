import React from 'react'

const HeroCard = ({ params }: any) => {
    return (
        <div>

            <div className="flex flex-wrap h-auto cursor-none gap-6 justify-center items-center">
                <label className="text-gray-200 ">

                    <div
                        className="group cursor-none flex flex-col gap-4 w-32 h-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl px-6 py-2 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-indigo-500 hover:shadow-indigo-500/20 peer-checked:border-indigo-500 peer-checked:from-indigo-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
                    >
                        

                        <div className="text-center cursor-none">
                            <p
                                className="font-medium text-sm group-hover:text-indigo-400 peer-checked:text-indigo-400 transition-colors duration-300"
                            >
                                {params.title}
                            </p>
                            <p
                                className="text-xs mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                4+ Yrs XP
                            </p>
                        </div>

                        <div
                            className="h-1 w-0 bg-indigo-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
                        ></div>
                    </div>
                </label>
            </div>



        </div>
    )
}

export default HeroCard
