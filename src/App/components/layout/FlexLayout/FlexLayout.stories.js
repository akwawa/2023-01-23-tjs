/* eslint-disable */
import FlexLayout from './FlexLayout';

export default {
    title: "FlexLayout",
};

export const Default = () =>
    <FlexLayout style={{ padding: '8px', border: '1px solid black' }}>
        <div
            style={{
                border: '1px solid black',
                backgroundColor: '#87CEEB3f',
                padding: '15px',
                textAlign: 'center'
            }}>
            1er enfant étendu
        </div>
        <div
            style={{
                border: '1px solid black',
                backgroundColor: '#FF63473f',
                padding: '15px',
                textAlign: 'center'
            }}>
            2nd restreint
        </div>
    </FlexLayout>;

Default.story = {
    name: 'default',
};
