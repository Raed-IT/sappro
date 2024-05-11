import {useFormik} from "formik";
import ControlledButton from "./ControlledButton";
import {useAddPostMutation, useUpdatePostMutation} from "../data/api/posts-api";
import {toast} from "react-toastify";
import AppRouters from "../data/constants/appRouters";
import {useNavigate} from "react-router";

function PostFormComponent({initVal}) {
    const [addPostRequest, {isLoading: isAdd}] = useAddPostMutation();
    const [updatePostRequest, {isLoading: isUpdate}] = useUpdatePostMutation();
    const navigate = useNavigate();

    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'The title field is required';
        } else if (values.title.length < 3) {
            errors.title = 'Must be 3 characters or more';
        }

        if (!values.body) {
            errors.body = 'Required';
        } else if (values.body.length < 20) {
            errors.body = 'Must be 20 characters or more';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: initVal,
        validate,
    });


    return <>
        <div className="w-full max-w-lg">
            <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className={'py-5 text-3xl mb-5'}>{initVal.title ? 'Update Post' : 'Add Post'}</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " + (formik.errors.title ? 'border-red-500' : '')}
                        id="title"
                        type="text"
                        placeholder="Title"/>
                    {formik.errors.title ?
                        <p className="text-red-500 text-xs italic">{formik.errors.title}</p> : null}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                        Body
                    </label>
                    <textarea
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.body}
                        name="body"
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " + (formik.errors.body ? 'border-red-500' : '')}
                        id="body"/>
                    {formik.errors.body ?
                        <p className="text-red-500 text-xs italic">{formik.errors.body}</p> : null}

                </div>
                <div className="flex items-center justify-between">
                    <ControlledButton
                        title={initVal.title ? 'Update Post' : 'Add Post'}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  w-full focus:shadow-outline"
                        isLoadingButton={isAdd || isUpdate}
                        onClick={async () => {
                            if (initVal.title) {
                                await updatePostRequest({
                                    id: initVal.id,
                                    payload: {
                                        "title": formik.values.title,
                                        "body": formik.values.body,
                                    }
                                }).then((val) => {
                                    if (Object?.keys(val).includes('error')) {
                                        toast("Error : " + val?.error?.status);
                                    } else {
                                        toast("Done Update ");
                                        navigate(AppRouters.index);
                                    }
                                });
                            } else {
                                addPostRequest({
                                    "title": formik.values.title,
                                    "body": formik.values.body,
                                }).then((val) => {
                                    if (Object?.keys(val).includes('error')) {
                                        toast("Error : " + val?.error?.status);
                                    } else {
                                        toast("Done Add ");
                                        navigate(AppRouters.index);
                                    }
                                });
                            }
                        }
                        }/>
                </div>
            </form>

        </div>
    </>;
}

export default PostFormComponent;