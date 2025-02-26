import React from "react";
import { MemeInterface, ImageInterface } from "orsys-tjs-meme";
import Button from "../../ui/Buttonts/Button";

import styles from "./MainForm.module.css";
import { connect } from "react-redux";
import { updateCurrent } from "../../../store/current";

//types
interface IMainFormProps {
    onMemeValueChange: Function,
    meme: MemeInterface,
    images: Array<ImageInterface>
}

const MainForm: React.FC<IMainFormProps> = (props) => {
    // console.log(props.images);
    return (
        <div data-testid="MemeForm" className={styles.MainForm}>
            <form>
                <h1>Titre</h1>
                <input
                    type="text"
                    id="f_titre"
                    placeholder="saisir titre"
                    value={props.meme.titre}
                    onChange={
                        (event) => {
                            // console.log(event.target.value);
                            props.onMemeValueChange({ ...props.meme, titre: event.target.value });
                        }
                    }
                />
                <hr />
                <h2>Image</h2>
                <select
                    value={props.meme.imageId}
                    onChange={
                        (event) => {
                            // console.log(event.target.value);
                            props.onMemeValueChange({ ...props.meme, imageId: Number(event.target.value) });
                        }
                    }
                >
                    <option value="-1">Aucune</option>
                    {
                        props.images.map(
                            (element, i,) => {
                                // console.log(element);
                                return (
                                    <option
                                        key={"f_img" + i}
                                        value={element.id}
                                    >
                                        {element.name}
                                    </option>
                                );
                            }
                        )
                    }
                </select>
                <hr />
                <h2>text</h2>
                <input
                    type="text"
                    value={props.meme.text}
                    onChange={
                        (event) => {
                            // console.log(event.target.value);
                            props.onMemeValueChange({ ...props.meme, text: event.target.value });
                        }
                    }
                />
                <div className={styles.half}>
                    <div>
                        <label htmlFor="f_x">x:</label>
                        <br />
                        <input
                            type="number"
                            className={styles.smallInput}
                            value={props.meme.x}
                            onChange={
                                (event) => {
                                    // console.log(event.target.value);
                                    props.onMemeValueChange({ ...props.meme, x: Number(event.target.value) });
                                }
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="f_y">y:</label>
                        <br />
                        <input
                            type="number"
                            className={styles.smallInput}
                            value={props.meme.y}
                            onChange={
                                (event) => {
                                    // console.log(event.target.value);
                                    props.onMemeValueChange({ ...props.meme, y: Number(event.target.value) });
                                }
                            }
                        />
                    </div>
                </div>
                <hr />
                <label htmlFor="f_color">Couleur</label><br />
                <input
                    type="color"
                    id="f_color"
                    value={props.meme.color}
                    onChange={
                        (event) => {
                            // console.log(event.target.value);
                            props.onMemeValueChange({ ...props.meme, color: event.target.value });
                        }
                    }
                />
                <div className={styles.half}>
                    <div>
                        <label htmlFor="f_sz">font-size:</label>
                        <br />
                        <input
                            type="number"
                            className={styles.smallInput}
                            min={0}
                            value={props.meme.fontSize}
                            onChange={
                                (event) => {
                                    // console.log(event.target.value);
                                    props.onMemeValueChange({ ...props.meme, fontSize: Number(event.target.value) });
                                }
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="f_fw">font-weight:</label>
                        <br />
                        <input
                            type="number"
                            className={styles.smallInput}
                            min="100"
                            step="100"
                            max="900"
                            value={props.meme.fontWeight}
                            onChange={
                                (event) => {
                                    // console.log(event.target.value);
                                    props.onMemeValueChange({ ...props.meme, fontWeight: event.target.value });
                                }
                            }
                        />
                    </div>
                </div>
                <div className={styles.half}>
                    <div>
                        <label htmlFor="f_underline">underline:</label>
                        <br />
                        <input
                            id="f_underline"
                            type="checkbox"
                            checked={props.meme.underline}
                            onChange={
                                (event) => {
                                    // console.log(event.target.checked);
                                    props.onMemeValueChange({ ...props.meme, underline: event.target.checked });
                                }
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="f_italic">italic:</label>
                        <br />
                        <input
                            id="f_italic"
                            type="checkbox"
                            checked={props.meme.italic}
                            onChange={
                                (event) => {
                                    // console.log(event.target.checked);
                                    props.onMemeValueChange({ ...props.meme, italic: event.target.checked });
                                }
                            }
                        />
                    </div>
                </div>
                <hr />
                <div className={styles.half}>
                    <Button type="reset" bgColor="tomato">
                        Reset
                    </Button>
                    <Button type="submit">save</Button>
                </div>
            </form>
        </div>
    );
};

// Voir useDispatch plutôt
function mapDispatchToProps(dispatch: Function) {
    return {
        onMemeValueChange: (newMeme:MemeInterface)=> {
            dispatch(updateCurrent(newMeme));
        }
    };
}

function mapStateToProps(state:any, ownProps:any) {
    return {
        ...ownProps,
        images:state.listes.images,
        meme:state.current
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);

export const UN_MainForm = MainForm;
