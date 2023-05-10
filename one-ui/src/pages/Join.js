import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Join = () => {
    const regId = /^(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/g
    const regPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g
    const regNickname = /^[a-zA-Z0-9]{2,20}$/g
    const regName = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}$/g

    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        if (!regId.test(data.userId) || !regPw.test(data.password) || !regNickname.test(data.nickname) || !regName.test(data.name)) {
            alert(`형식에 안 맞는 입력이 존재합니다.`)
            return 
        }

        const joinMember = {
            userId: data.userId,
            password: data.password,
            nickname: data.nickname,
            name: data.name
        }

        console.log(joinMember);

        axios.post("http://localhost:9010/auth/join", joinMember)
        .then((res) => {
            alert(`등록되었습니다.`)
            navigate(`/login`);
        }).catch((e) => {
            alert(`입력 제대로 할 것.`)
        })

        reset();
    }

    const onError = (err) => {
        alert(err)
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <input type="search"
                        placeholder="ID를 입력하세요"
                        {...register("userId")} 
                    />
                    <span style={{color: 'red', fontSize: '9px'}}> * 아이디는 영소문자와 숫자로 이루어진 6~20자 글자여야 합니다.</span>
                </div>
                <div>
                    <input type="password"
                        placeholder="비밀번호를 입력하세요"
                        {...register("password")}
                    />
                    <span style={{color: 'red', fontSize: '9px'}}> * 비밀번호는 영소문자, 영대문자, 숫자, 특수문자로 이루어진 8~20자 글자여야 합니다.</span>
                </div>
                <div>
                    <input type="search"
                        placeholder="닉네임을 입력하세요"
                        {...register("nickname")}
                    />
                    <span style={{color: 'red', fontSize: '9px'}}> * 닉네임은 영소문자, 영대문자, 숫자로 이루어진 2~20자 글자여야 합니다.</span>
                </div>
                <div>
                    <input type="search"
                        placeholder="이름을 입력하세요"
                        {...register("name")}
                    />
                    <span style={{color: 'red', fontSize: '9px'}}> * 한글 이름 입력</span>
                </div>
                <button type="submit">가입</button>
            </form>
        </>
    )
}

export default Join;