import { useState } from 'react';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Stattistics } from 'components/Stattistics/Stattistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    return Math.round((good / total) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={['good', 'neutral', 'bad']}
      />

      {countTotalFeedback() === 0 ? (
        <Notification />
      ) : (
        <Stattistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          PositivePercentage={countPositiveFeedbackPercentage(
            countTotalFeedback()
          )}
        />
      )}
    </Section>
  );
}
