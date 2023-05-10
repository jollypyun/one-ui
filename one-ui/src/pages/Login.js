import { Button } from "@mui/material";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const Login  = () => {
    const regHangeul = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    const { register, handleSubmit } = useForm();

    const checkId = (value) => {
        
        if (regHangeul.test(value)) {
            return false;
        }
        return true
    }

    const checkPassword = (value) => {
        if (regHangeul.test(value)) {
            return false;
        }
    }

    const onSubmit = () => {

    }

    const onError = () => {

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <input type="search"
                        placeholder="ID를 입력하세요"
                        {...register("userId", {
                            validate: (value) => {
                                checkId(value);
                            }
                        })} 
                    />
                </div>
                <div>
                    <input type="password"
                        placeholder="비밀번호를 입력하세요"
                        {...register("password", {
                            validate: (value) => {
                                checkPassword(value);
                            }
                        })}
                    />
                </div>
            </form>
            <div>
                <Link key={`Join`} to={"/join"}>
                    <Button>Join</Button>
                </Link>
            </div>
        </>
    )
}

export default Login